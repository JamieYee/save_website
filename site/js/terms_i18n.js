(function () {
    // Get device language
    var lang = navigator.language || navigator.userLanguage;

    // Check if language starts with 'en'
    if (lang && lang.toLowerCase().indexOf('en') === 0) {

        // Update Page Title and HTML Lang
        document.title = "飞飞记账 User Agreement";
        document.documentElement.lang = "en";

        // English Content
        var enContent = `
            <h1>飞飞记账 User Agreement</h1>
            <div class="policy-date">
              <p><strong>Effective Date:</strong> July 01, 2025</p>
              <p><strong>Update Date:</strong> July 15, 2025</p>
            </div>
            <p>
              Welcome to use our products! This User Agreement (hereinafter referred to as "this Agreement") is an agreement between you (hereinafter referred to as "User") and "Shenzhen Xiongjiujiu Technology Co., Ltd." (hereinafter referred to as "We") regarding the user's use of the 飞飞记账 App.
              Please read the entire content of this agreement carefully before using this application.
            </p>

            <h2>1. Service Content</h2>
            <ol>
              <li>This application provides users with functions such as daily income and expenditure recording, financial management, and data statistics.</li>
              <li>This application may be updated, upgraded, or provide new functions from time to time, and the updated functions also apply to this agreement.</li>
            </ol>

            <h2>2. User Registration and Account Management</h2>
            <ol>
              <li>Users can choose to register an account or use it as a guest. Some functions may require logging in completely.</li>
              <li>Users should properly abide by their account information.</li>
            </ol>

            <h2>3. User Code of Conduct</h2>
            <p>Users shall not engage in illegal or improper activities while using this app.</p>

            <h2>4. Privacy and Data Protection</h2>
            <p>We will collect, use, and store your personal information in accordance with the Privacy Policy.</p>

            <h2>5. Disclaimer</h2>
            <p>The financial data and analysis provided by this app are for reference only.</p>

            <h2>6. Other Terms</h2>
            <p>This agreement is governed by the laws of the People's Republic of China.</p>
            
            <p>
              Our operating company is Shenzhen Xiongjiujiu Technology Co., Ltd.
              If you have any questions, please contact us at: 898763215@qq.com.
            </p>
        `;

        // Replace content
        var contentDiv = document.querySelector('.content');
        if (contentDiv) {
            contentDiv.innerHTML = enContent;
        }
    }
})();
