// Simplified version, ensure you handle errors and states appropriately
const DOWNLOAD_DOCUMENT_WEBHOOK_URL = "https://api.evolve2digital.com/webhook/downloadDocument";

export async function registerLeadAndGetDocument(leadData) {
  try {
    console.log("Nuevo lead registrado (simulado):", leadData);

    const webhookResponse = await fetch(DOWNLOAD_DOCUMENT_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    if (!webhookResponse.ok) {
      console.error(
        `Error al llamar al webhook ${DOWNLOAD_DOCUMENT_WEBHOOK_URL}:`,
        webhookResponse.status,
        await webhookResponse.text()
      );
      return {
        success: true, 
        message: "Lead registrado, pero hubo un problema al obtener el documento.",
        status: webhookResponse.status
      };
    }

    const webhookData = await webhookResponse.json();
    const documentUrl = webhookData.documentUrl || "/guia-5-pasos-ahorrar-tiempo-ia.pdf"; // Fallback

    return {
      success: true,
      message: "Lead registrado correctamente y documento obtenido.",
      documentUrl: documentUrl,
      status: webhookResponse.status
    };
  } catch (error) {
    console.error("Error en registerLeadAndGetDocument:", error);
    return {
      success: false,
      message: "Error interno del servidor al procesar la suscripción.",
      status: 500
    };
  }
}