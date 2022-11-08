import React from "react";

const Blogs = () => {
  return (
    <div className="md:py-16 sm:py-12 py-8 lg:px-16 md:px-12 sm:px-8 px-2">
      <h1 className="md:text-4xl text-center sm:text-2xl text-md font-bold text-black">
        Here are some important{" "}
        <span className="text-red-400">questions and answers!!</span>
      </h1>
      <div className="grid grid-cols-1 md:pt-12 sm:pt-4 pt-2">
        <div>
          <p className="font-bold text-red-400 sm:text-xl text-md">
            SQL vs. NoSQL Databases: What's the Difference?
          </p>
          <div>
            <span className="font-bold">What is a SQL database?</span>
            <br />{" "}
            <span className="text-sm">
              SQL, which stands for “Structured Query Language,” is the
              programming language that’s been widely used in managing data in
              relational database management systems (RDBMS) since the 1970s. In
              the early years, when storage was expensive, SQL databases focused
              on reducing data duplication. Fast-forward to today, and SQL is
              still widely used for querying relational databases, where data is
              stored in rows and tables that are linked in various ways. One
              table record may link to one other or to many others, or many
              table records may be related to many records in another table.
              These relational databases, which offer fast data storage and
              recovery, can handle great amounts of data and complex SQL
              queries.
            </span>
            <br />
            <span className="font-bold">What is a NoSQL database?</span>
            <br />{" "}
            <span className="text-sm">
              NoSQL is a non-relational database, meaning it allows different
              structures than a SQL database (not rows and columns) and more
              flexibility to use a format that best fits the data. The term
              “NoSQL” was not coined until the early 2000s. It doesn’t mean the
              systems don’t use SQL, as NoSQL databases do sometimes support
              some SQL commands. More accurately, “NoSQL” is sometimes defined
              as “not only SQL.”
            </span>
          </div>
        </div>
        <br />
        <br />
        <div>
          <p className="font-bold text-red-400 sm:text-xl text-md">
            What is JWT and how it works?
          </p>
          <div className="">
            <span className="text-sm">
              JWTs are a good way of securely transmitting information between
              parties because they can be signed, which means you can be sure
              that the senders are who they say they are. Additionally, the
              structure of a JWT allows you to verify that the content hasn't
              been tampered with.
            </span>
            <br />
            <span className="font-bold">JWT works like this:</span>
            <br />
            <span className="text-sm">
              A user logs in to an application with a username and password, or
              otherwise proves her identity. The server confirms her identity
              and sends back an access token containing a reference to her
              identity (e.g. a private key pointing to a unique User instance).
              The client then includes this access token with every request to
              the server. For protected routes, REST API authentication
              middleware asserts the presence of a valid access token. The
              server can further use the identity asserted by the validated
              token to implement more granular permissions, such as acting on
              resources belonging to that particular user.
            </span>
          </div>
        </div>
        <br />
        <br />
        <div>
          <p className="font-bold text-red-400 sm:text-xl text-md">
            Comparison Between Node.js and JavaScript?
          </p>
          <span className="font-bold">NodeJS</span>
          <br />
          <span className="text-sm">
            It's a bridge, open-source Js runtime environment for executing Js
            on the server. It's a JavaScript translator and environment that
            includes some valuable libraries for JavaScript programming. It's
            mainly popular on the server-side. It's made for real-time
            data-intensive apps that run on multiple platforms.
          </span>
          <br />

          <span className="font-bold">Javascript</span>
          <br />
          <span className="text-sm">
            It is an accessible, bridge, parsed, lightweight, reactive, and web
            apps programming language. It's a programming language, after all.
            Any browser with a competent browser engine will operate. It's most
            commonly used on client-side servers. It's made for creating
            network-centric apps.
          </span>
          <br />
        </div>
        <div>
          <br />
          <br />
          <p className="font-bold text-red-400 sm:text-xl text-md">
            How does node handle multiple requests at the same time?
          </p>
          <span className="text-sm">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
