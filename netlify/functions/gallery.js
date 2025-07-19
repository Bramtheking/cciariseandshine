exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Content-Type": "application/json",
  }

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" }
  }

  try {
    // For now, return empty array since we don't have persistent storage
    // In production, you'd connect to a database
    const data = []

    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      }
    }

    if (event.httpMethod === "POST") {
      const newItem = JSON.parse(event.body || "{}")
      // In production, save to database
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, item: newItem }),
      }
    }

    if (event.httpMethod === "DELETE") {
      const { id } = JSON.parse(event.body || "{}")
      // In production, delete from database
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true }),
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    }
  } catch (error) {
    console.error("Gallery function error:", error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error", details: error.message }),
    }
  }
}
