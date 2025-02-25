const http = require("http");
const fs = require("fs");
const filePath = "student.json";

// Read data from file
const readData = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// Write data to file
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/students") {
        const students = readData();
        res.writeHead(200);
        res.end(JSON.stringify(students));
    } 
    else if (req.method === "POST" && req.url === "/students") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const students = readData();
            const newStudent = JSON.parse(body);
            students.push(newStudent);
            writeData(students);
            res.writeHead(201);
            res.end(JSON.stringify({ message: "Student added successfully" }));
        });
    } 
    else if (req.method === "PUT" && req.url.startsWith("/students/")) {
        const id = req.url.split("/")[2];
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            let students = readData();
            const index = students.findIndex(s => s.id == id);
            if (index !== -1) {
                students[index] = { ...students[index], ...JSON.parse(body) };
                writeData(students);
                res.writeHead(200);
                res.end(JSON.stringify({ message: "Student updated successfully" }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "Student not found" }));
            }
        });
    } 
    else if (req.method === "DELETE" && req.url.startsWith("/students/")) {
        const id = req.url.split("/")[2];
        let students = readData();
        const filteredStudents = students.filter(s => s.id != id);
        if (students.length !== filteredStudents.length) {
            writeData(filteredStudents);
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Student deleted successfully" }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Student not found" }));
        }
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
