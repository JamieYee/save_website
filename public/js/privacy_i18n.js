(function () {
  // Get device language
  var lang = navigator.language || navigator.userLanguage;

  // Check if language starts with 'en'
  if (lang && lang.toLowerCase().indexOf('en') === 0) {

    // Update Page Title and HTML Lang
    document.title = "飞飞记账 Privacy Policy";
    document.documentElement.lang = "en";

    // English Content
    var enContent = `
            <h1>飞飞记账 Privacy Policy</h1>
            <div class="policy-date">
              <p><strong>Effective Date:</strong> July 01, 2025</p>
              <p><strong>Update Date:</strong> April 10, 2026</p>
            </div>
            <p>
              This is an expense tracking App. All functions are designed to achieve professional bookkeeping and help users optimize their personal financial situation.
              To use "飞飞记账" and its services, you should read and abide by this agreement. Please be sure to read carefully and fully understand the content of each clause, especially the clauses exempting or limiting liability, and separate agreements for opening and using certain services, and choose to accept or not accept.
              If you do not agree to any content in this Privacy Policy, please stop using or accessing our products and services immediately.
            </p>

            <h2>This Privacy Policy helps you understand the following:</h2>
            <p>1. How we collect and use your personal information</p>
            <p>2. How we store and protect your personal information</p>
            <p>3. How we share, transfer, and publicly disclose your personal information</p>
            <p>4. Notes on Smart Accounting</p>
            <p>5. Notes on Android Desktop Widgets</p>
            <p>6. Privacy Policy Update Instructions</p>
            <p>7. Company Information and Contact Details</p>

            <h2>1. How we collect and use your personal information</h2>
            <p>
              Personal information refers to various information recorded electronically or in other ways that can identify a specific natural person's identity or reflect a specific natural person's activities alone or in combination with other information.
              In accordance with relevant laws and regulations, and strictly following the principles of legitimacy, legality, and necessity, we collect and use your personal information during your use of our services and/or products, including but not limited to email addresses, etc.
            </p>
            <h3>1.1 Personal Information Processing List (Purpose, Method, Scope)</h3>
            <p>
              To help you clearly understand our practices, we explain by data type as follows:
            </p>
            <ol>
              <li><strong>Data we do not process:</strong> This app does not collect IMEI, IMSI, device MAC address, SUPI, SUCI, contacts, call logs, calendar, SMS, or your local phone number.</li>
              <li><strong>Images / audio / video:</strong> Processed only when you actively choose an image and share it to "FeiFei Accounting" via system sharing. We run OCR locally first, then send recognized text (and content you explicitly choose to upload) to your self-configured LLM service. Scope is limited to what you actively share.</li>
              <li><strong>Installed app list clarification:</strong> We do not proactively collect your full installed-app list. When you trigger actions such as sharing, sending email, or opening a web link, Android may temporarily query apps that can handle that action. This is only for feature routing and compatibility checks, and is not used for profiling, advertising, or third-party sharing.</li>
              <li><strong>Data minimization:</strong> We process personal information only within the minimum scope required for each feature. Refusing a non-essential permission affects only that feature and does not affect core bookkeeping functions.</li>
            </ol>
            <h3>1.2 Consent and Trigger Timing</h3>
            <p>
              Before processing personal information, we provide notice of the purpose, method, and scope through privacy pop-ups, permission prompts, or page disclosures, and process only after your consent is obtained. For non-essential data, you may revoke permission at any time in your system settings.
            </p>
            <h3>1.3 [Reading Installed Apps] Clarification</h3>
            <p>
              To support features such as sharing, sending email, and opening web links, Android may query which apps can handle a specific action (for example, apps that respond to a given intent) when you actively trigger that action. Purpose: feature routing and compatibility checks. Method: temporary on-device system query. Scope: only app response information related to the current action, not your full installed-app list. We do not use this information for profiling, personalized recommendation, or targeted marketing, and we do not share it with third parties.
            </p>

            <h2>2. How we store and protect your personal information</h2>
            <p>
              As a general rule, we only retain your personal information for the time necessary to achieve the purpose of information collection.
              We will retain your personal information for the time strictly necessary to manage our relationship with you (for example, when you open an account and obtain services from our products).
              For the purpose of complying with legal obligations or to prove that a certain right or contract meets the applicable statute of limitations requirements, we may need to retain your archived personal information after the above period expires, and cannot delete it at your request.
              When your personal information is no longer necessary for our legal obligations or the purposes corresponding to the statutory limitation period or archives, we ensure that it is completely deleted or anonymized.
              We use industry-standard security protection measures to protect the personal information you provide and encrypt key data to prevent unauthorized access, public disclosure, use, modification, damage, or loss. We will take all reasonable and feasible measures to protect your personal information.
            </p>

            <h2>3. How we share, transfer, and publicly disclose your personal information</h2>
            <p>
              We will use your personal information compliantly and appropriately when managing our daily business activities and pursuing legitimate interests to better service customers.
              We only use this data ourselves and do not share it with any third parties.
              We may share your personal information externally in accordance with laws and regulations or mandatory requirements of government authorities.
            </p>

            <h2>4. Notes on Smart Accounting</h2>
            <p>
              After configuring a Large Language Model (LLM), the "Smart Accounting" feature offers the following two modes:
            </p>
            <ol>
              <li><strong>Chat-based Accounting:</strong> By sending text messages through the chat interface, the app will call your configured LLM API, sending the text to the LLM for semantic analysis, and returning it as structured bill data.</li>
              <li><strong>Image-sharing Accounting (AI Assistant):</strong> When you actively choose an image in your gallery or another app and share it to "FeiFei Accounting" through system sharing, the app processes that image. The app first performs local OCR (Optical Character Recognition) on the image to extract text, and then sends it to the LLM for analysis to return structured bill data. This process is triggered only when you actively share an image.</li>
            </ol>
            <p>
              Your chat data and the image content you actively share are processed only within the necessary scope of the Smart Accounting feature, and are only sent to the LLM service you personally configured. We will not use such information for other commercial purposes or share it with any third parties.
            </p>

            <h2>5. Notes on Android Desktop Widgets</h2>
            <p>
              This app supports Android desktop widgets to improve your convenience and operation efficiency.
            </p>
            <ol>
              <li>Only displayed after the user actively adds it; the app will not automatically add the widget to the desktop.</li>
              <li>Conveniently open 飞飞记账 or view data summaries in the app.</li>
              <li>Widgets only read and display local data and do not involve any third-party communication.</li>
            </ol>

            <h2>6. Privacy Policy Update Instructions</h2>
            <p>
              We may modify and update this privacy policy from time to time. We will publish updates in the 飞飞记账 app in the form of notifications and announcements. You can visit the 飞飞记账 app to query the latest version of the privacy policy.
            </p>

            <h2>7. Company Information and Contact Details</h2>
            <p>
              Our main operating company is Shenzhen Xiongjiujiu Technology Co., Ltd.
              Contact email: 898763215@qq.com.
            </p>
        `;

    // Replace content
    var contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.innerHTML = enContent;
    }
  }
})();
