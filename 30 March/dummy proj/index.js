// acc_no == id, balance, name, widthdraw, credit,
// /user/withdrawal/account_no/amount
// /user/credit/account_no/amount
// /user/create
//  /user/account_no


// data.txt

// for every transaction  + new user  =  data.txt=> clear ------ > users(updated object) JSON.stringfy(users)











// const users = [
//   {
//     id: "3782",
//     name: "pushpa",
//     //age: 22,
//     balance: 60000,
//   },
//   {
//     id: "3783",
//     name: "seema",
//     age: 20,
//     balance: 10000,
//   },
//   {
//     id: "3784",
//     name: "ravi",
//     age: 28,
//     balance: 50000,
//   },
// ];
// const http = require("http");
// const server = http.createServer();
// server.on("request", (request, response) => {
//   if (
//     /user\/withdrawal\/[0-9]+\/[0-9]+/.test(request.url) && // user/withdraw/account number/amount
//     request.method === "GET"
//   ) {
//     response.statusCode = 200;
//     const path = request.url.split("/");
//     const amount = path[path.length - 1];
//     const account = path[path.length - 2];
//     const isValidAccount = users.find((user,idx) => {
//       if (user.id === account) {
//         if (amount <= user.balance) {
//           users[idx].balance -= amount;
//           response.write(`${amount} rupees withdrawn`);
//           response.write(`${users[idx].balance} rupees withdrawn`);
//           response.end();
//         } else {
//           response.end("insufficient balance");
//         }
//         return true;
//       } else {
//         response.end("invalid account number");
//         return false;
//       }
//     });
//   }
//   else if(request.url ==="/" &&  request.method === "GET" ){
//     response.end("hello");
//   }
// });
// server.listen(3000, () => {
//   console.log("listening");
// });
// acc_no == id, balance, name, widthdraw, credit,
// /user/withdrawal/account_no/amount
// /user/credit/account_no/amount
// /user/create
//  /user/account_no
const users = [
  {
    id: "3782",
    name: "pushpa",
    age: 22,
    balance: 60000,
  },
  {
    id: "372",
    name: "seema",
    age: 20,
    balance: 10000,
  },
  {
    id: "382",
    name: "ravi",
    age: 28,
    balance: 50000,
  },
];
const http = require("http");
const server = http.createServer();
server.on("request", (request, response) => {
  if (
    /user\/withdrawal\/[0-9]+\/[0-9]+/.test(request.url) &&
    request.method === "GET"
  ) {
    response.statusCode = 200;
    const path = request.url.split("/");
    const amount = path[path.length - 1];
    const account = path[path.length - 2];
    const isValidAccount = users.find((user) => {
      if (user.id === account) {
        if (amount <= user.balance) {
          user.balance -= amount;
          response.end(`${amount} rupees withdrawn`);
        } else {
          response.end("insufficient balance");
        }
        return true;
      } else {
        response.end("invalid account number");
        return false;
      }
    });
  }
  else if(/user\/credit\/[0-9]+\/[0-9]+/.test(request.url) &&
  request.method === "GET"){
    response.statusCode = 200;
    const path = request.url.split("/");
    const amount = path[path.length - 1];
    const account = path[path.length - 2];
    const isValidAccount = users.find((user) => {
      if (user.id === account) {
        
          user.balance += amount;
          response.end(`${amount} rupees credited`);
         
        return true;
      } else {
        response.end("invalid account number");
        return false;
      }
    });
  }
  else if(/user\/[0-9]+/.test(request.url) && request.method === "GET"){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const path = request.url.split('/');
    const id = Number(path[path.length - 1]);
    response.end(JSON.stringify(users.find((user) => user.id === id)));
    console.log(JSON.stringify(users.find((user) => user.id === id)));
  }
  else if(request.url === "/user/new" && request.method === "POST") {
    let body = ''
    request.on('data', (data) => {
        body += data;
    })
    request.on('end', () => {
        const newUser = { id: users.length+1, ...JSON.parse(body)}
        users.push(newUser)
        response.end(JSON.stringify(newUser))
    })  
}
else{
  response.writeHead(404, { "Content-Type": "text/plain" })
  response.end("Not Found 123");
}
});
server.listen(3000, () => {
  console.log("listening on port 5500");
});