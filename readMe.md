MERN Stack Developer Summary

Key Skills:

MongoDB & Mongoose
Express.js
React.js
Node.js
JavaScript (ES6+)
HTML5 & CSS3
Tailwind CSS
REST APIs
JWT Authentication
Git & GitHub
Axios
Linux
Nginx & PM2
VPS Deployment
MVC Architecture
CRUD Operations
Responsive Web Design
API Integration
Database Design & Optimization


db.students.find(
    { 
        subjects: {
             $elemMatch: {
                 subject: "Mathematics" ,
                 marks : { $gte: 80 , $lte: 90}
                } 
        }
    }
).limit(10).order()

$in: [ 2000,2002 ]

$set : , $unset

db.collection.updateOne( {search}, {update}  )
db.collection.updateMany

db.employees.updateMany({},{$set: { rating: "Senior" }})
