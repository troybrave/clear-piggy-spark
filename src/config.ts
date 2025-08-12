// Global config for client-side integrations
// Set your n8n webhook URL here (or override at runtime via localStorage key "EMAIL_WEBHOOK_URL")
// Example: "https://your-n8n.example.com/webhook/airtable-email"
export const EMAIL_WEBHOOK_URL = "";

// Choose request mode:
// - 'no-cors' (default): safest for external webhooks; response will be opaque
// - 'cors': if your endpoint sends proper CORS headers and you want status handling
export const EMAIL_WEBHOOK_MODE: RequestMode = "no-cors";
