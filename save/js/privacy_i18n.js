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
              <p><strong>Update Date:</strong> July 15, 2025</p>
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
            <p>4. Notes on Android Desktop Widgets</p>
            <p>5. Privacy Policy Update Instructions</p>
            <p>6. Company Information and Contact Details</p>

            <h2>1. How we collect and use your personal information</h2>
            <p>
              Personal information refers to various information recorded electronically or in other ways that can identify a specific natural person's identity or reflect a specific natural person's activities alone or in combination with other information.
              In accordance with relevant laws and regulations, and strictly following the principles of legitimacy, legality, and necessity, we collect and use your personal information during your use of our services and/or products, including but not limited to email addresses, etc.
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

            <h2>4. Notes on Android Desktop Widgets</h2>
            <p>
              This app supports Android desktop widgets to improve your convenience and operation efficiency.
            </p>
            <ol>
              <li>Only displayed after the user actively adds it; the app will not automatically add the widget to the desktop.</li>
              <li>Conveniently open 飞飞记账 or view data summaries in the app.</li>
              <li>Widgets only read and display local data and do not involve any third-party communication.</li>
            </ol>

            <h2>5. Privacy Policy Update Instructions</h2>
            <p>
              We may modify and update this privacy policy from time to time. We will publish updates in the 飞飞记账 app in the form of notifications and announcements. You can visit the 飞飞记账 app to query the latest version of the privacy policy.
            </p>

            <h2>6. Company Information and Contact Details</h2>
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
