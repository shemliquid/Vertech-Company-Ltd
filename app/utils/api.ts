const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
  preferredContact?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  overview?: string;
  whoItIsFor?: string;
  benefits?: string[];
  process?: string[];
}

export interface Project {
  id: number;
  name: string;
  industry: string;
  description: string;
  keyResults: string[];
  link?: string | null;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ApiResponse<{ id: number }>> {
  try {
    // Web3Forms API endpoint
    const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      throw new Error("Web3Forms access key is not configured");
    }

    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Contact Form Submission - Vertex Tech");
    formData.append("from_name", "Vertex Tech Contact Form");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    if (data.company) {
      formData.append("company", data.company);
    }
    if (data.service) {
      formData.append("service", data.service);
    }
    if (data.preferredContact) {
      formData.append("preferredContact", data.preferredContact);
    }

    // Submit to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to submit form");
    }

    return {
      success: true,
      message: "Form submitted successfully",
      data: { id: Date.now() }, // Web3Forms doesn't return an ID, so we use timestamp
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/services`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<Service[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to fetch services");
    }

    return result.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    // Return empty array instead of throwing to prevent app crash
    return [];
  }
}

export async function getService(id: string): Promise<Service> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}`);
    const result: ApiResponse<Service> = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Service not found");
    }

    return result.data!;
  } catch (error) {
    console.error("Error fetching service:", error);
    throw error;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<Project[]> = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to fetch projects");
    }

    return result.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Return empty array instead of throwing to prevent app crash
    return [];
  }
}
