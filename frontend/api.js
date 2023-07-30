const API_URL = "http://127.0.0.1:8000/hottake";
//const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5YWRmZGZ0cWZtYW5jYnN1d3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyODE4NzYsImV4cCI6MjAwNDg1Nzg3Nn0.W_LO6lH7c6llSAoPdHLw5KSS5XfRVDgBbjrMIxXNzDc";

// Load Data from supabase
async function loadTakes(query = "") {
    const url = query ? `${API_URL}?${query}` : API_URL;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default loadTakes;
