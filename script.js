const API_BASE = "https://j28i45vjx0.execute-api.ap-south-1.amazonaws.com";

async function createShortLink() {
  const targetUrl = document.getElementById("target_url").value;

  if (!targetUrl) {
    alert("Please enter a URL");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/links`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        target_url: targetUrl
      })
    });

    const data = await response.json();

    if (data.code) {
      const shortUrl = `${API_BASE}/${data.code}`;
      document.getElementById("result").innerHTML = `
        <p><strong>Short URL:</strong>
        <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>
      `;
    } else {
      document.getElementById("result").innerHTML = `
        <p style="color:red;">Failed to create short URL</p>
      `;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `
      <p style="color:red;">Error: ${error.message}</p>
    `;
  }
}

async function loadLinks() {
  try {
    const response = await fetch(`${API_BASE}/admin/links`);
    const data = await response.json();

    const list = document.getElementById("linksList");
    list.innerHTML = "";

    data.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${item.code}</strong> →
        <a href="${item.target_url}" target="_blank">${item.target_url}</a>
        | Clicks: ${item.click_count}
      `;
      list.appendChild(li);
    });
  } catch (error) {
    document.getElementById("linksList").innerHTML = `
      <li style="color:red;">Error loading links: ${error.message}</li>
    `;
  }
}