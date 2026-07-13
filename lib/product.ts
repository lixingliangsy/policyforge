export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "PolicyForge",
  slug: "policyforge",
  tagline: "Privacy policy, terms & EULA for your app in minutes",
  description: "Generate compliant legal docs for your iOS / Android / Web app \u2014 privacy policy, terms of service, EULA, cookie policy \u2014 by answering a few questions.",
  toolTitle: "Generate your legal doc",
  resultLabel: "Your document",
  ctaLabel: "Generate document",
  features: [
  "App-store ready (Apple & Google compliant)",
  "Privacy / Terms / EULA / Cookies",
  "Multi-jurisdiction (US / EU / UK)",
  "Plain-English, not legalese"
],
  inputs: [
  {
    "key": "appname",
    "label": "App / Product name",
    "type": "input",
    "placeholder": "e.g. TaskNinja"
  },
  {
    "key": "platform",
    "label": "Platform",
    "type": "select",
    "options": [
      "iOS",
      "Android",
      "Web",
      "iOS + Android",
      "Web + Mobile"
    ]
  },
  {
    "key": "collects",
    "label": "Data you collect",
    "type": "textarea",
    "placeholder": "e.g. email, usage analytics, crash logs, in-app purchases"
  },
  {
    "key": "jurisdiction",
    "label": "Jurisdiction",
    "type": "select",
    "options": [
      "United States",
      "EU (GDPR)",
      "UK",
      "Global"
    ]
  },
  {
    "key": "doctype",
    "label": "Document",
    "type": "select",
    "options": [
      "Privacy Policy",
      "Terms of Service",
      "EULA",
      "Cookie Policy"
    ]
  }
] as InputField[],
  systemPrompt: "You are a contracts lawyer. Generate a clear, app-store-compliant document of the requested type for the given app. Include standard clauses for the jurisdiction. Use plain English. Add a short note that this is a template and not legal advice.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "1 document"
  },
  {
    "tier": "Solo",
    "price": "$12/mo",
    "desc": "All doc types, all jurisdictions"
  },
  {
    "tier": "Studio",
    "price": "$29/mo",
    "desc": "Team, watermark-free, export"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const n = inputs['appname'] || 'Your App'
  const p = inputs['platform'] || 'your platform'
  const d = inputs['doctype'] || 'Privacy Policy'
  const j = inputs['jurisdiction'] || 'United States'
  return `${d.toUpperCase()} — ${n} (${p}, ${j})

1. Information We Collect
   ${inputs['collects'] || 'We collect the data described in-app.'}

2. How We Use It
   To operate and improve ${n}, and to provide support.

3. Your Rights
   You may request deletion of your data at any time.

4. Contact
   privacy@${n.toLowerCase().replace(/\s+/g, '')}.com

---
(This is a mock template. Add OPENAI_API_KEY for a full AI-generated, jurisdiction-specific document.)`
}
}
