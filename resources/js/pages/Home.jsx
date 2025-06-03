import React, { useEffect, useState } from "react";
import getApiUrl from "../utils/apiUrl";

const Home = () => {
    const [dbStatus, setDbStatus] = useState(null);
    const [error, setError] = useState(null);
    const [responseHeaders, setResponseHeaders] = useState([]);

    useEffect(() => {
        fetch(getApiUrl("status"))
            .then((res) => res.json())
            .then((data) => {
                if (data && data.database) {
                    setDbStatus(data.database);
                } else {
                    setError("Invalid response structure");
                }

                if (data["X-Powered-By"]) {
                    setResponseHeaders([
                        `X-Powered-By: ${data["X-Powered-By"]}`,
                    ]);
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <header className="shadow-md rounded-lg p-6 mb-4 bg-[#15181D] flex flex-col justify-center items-center">
                <div className="flex items-center justify-center space-x-6">
                    <img
                        src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/Laravel/LaravelTransparent.png"
                        className="w-32"
                        alt="Laravel Logo"
                    />
                    <img
                        src="https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/React/React.png"
                        className="w-32"
                        alt="React Logo"
                    />
                </div>
                <h1 className="text-3xl font-bold text-center bg-text-gradient bg-clip-text text-transparent mt-4">
                    Laravel + React.js Monolith on Vercel
                </h1>
            </header>
            <main className="space-y-5">
                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <img src="/proof.avif" className="w-full p-0 !rounded-xl" alt="Proof" />
                </section>
                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        RESPONSE HEADERS
                    </h2>
                    <pre className="p-0 rounded-md text-sm overflow-x-auto">
                        {responseHeaders.length > 0 ? (
                            responseHeaders.map((header, index) => (
                                <div key={index}>{header}</div>
                            ))
                        ) : (
                            <div>Loading headers...</div>
                        )}
                    </pre>
                </section>
                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        CLONE REPOSITORY
                    </h2>
                    <ol className="list-decimal pl-6 text-white mb-4">
                        <li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git clone
                                https://github.com/RevanSP/LARAVEL-REACT-MONOLITH-VERCEL-TEMPLATE.git
                            </code>
                        </li>
                        <li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                cd LARAVEL-VERCEL-EXAMPLE
                            </code>
                        </li>
                        <li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                composer install
                            </code>
                        </li>
                          <li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                bun install
                            </code>
                        </li>
                        <li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                cp .env.example .env
                            </code>
                        </li>
                        <li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                mkdir dist
                            </code>
                        </li>
                    </ol>
                </section>

                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        TESTING YOUR API
                    </h2>
                    <p className="mb-4">
                        To test your newly created REST API, visit the{" "}
                        <code className="bg-[#1C232B] px-1 rounded">
                            /api/api/status
                        </code>{" "}
                        route on Vercel.
                    </p>
                    <p className="mb-4">
                        Example URL:{" "}
                        <code className="bg-[#1C232B] px-1 rounded">
                            https://laravel-react-monolith-vercel-template.vercel.app/api/api/status
                        </code>
                    </p>
                    <p className="mb-4">Expected JSON response:</p>
                    <pre className="p-4 rounded-md text-sm overflow-x-auto">
                        {`{
 "X-Powered-By": "PHP/' . phpversion()",
  "database": {
    "status": "Connected successfully!/Connected failed!",
    "version": "$conn->server_info",
    "host": "$host",
    "database": "$database"
 }
}`}
                    </pre>
                    <p className="mt-4">
                        Note: When running locally, use{" "}
                        <code className="bg-[#1C232B] px-1 rounded">
                            /api/status
                        </code>{" "}
                        (without the extra{" "}
                        <code className="bg-[#1C232B] px-1 rounded">/api</code>{" "}
                        prefix).
                    </p>
                </section>

                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        SETTING APP_KEY
                    </h2>
                    <p className="mb-4">
                        You must add the{" "}
                        <code className="bg-[#1C232B] px-1 rounded">
                            APP_KEY
                        </code>{" "}
                        from your{" "}
                        <code className="bg-[#1C232B] px-1 rounded">.env</code>{" "}
                        file into the{" "}
                        <code className="bg-[#1C232B] px-1 rounded">
                            vercel.json
                        </code>{" "}
                        configuration. To do this, follow these steps:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-4">
                        <li>
                            Generate your{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                APP_KEY
                            </code>{" "}
                            using the command{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                php artisan key:generate
                            </code>
                        </li>
                        <li>
                            Copy the generated key from{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                .env APP_KEY
                            </code>{" "}
                            field into the{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                vercel.json
                            </code>{" "}
                            file
                        </li>
                    </ol>
                    <pre className="p-4 rounded-md text-sm overflow-x-auto">
                        {`{
   //

    "env": {
        //

        // Add your APP_KEY here
        "APP_KEY": "",
        // Add your APP_KEY here

        //
    }

    //
}`}
                    </pre>
                </section>

                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        CONNECT WITH MYSQL (FREE)
                    </h2>
                    <p className="mb-4">
                        This free service allows you to connect to a remote
                        MySQL database for testing purposes. Please note that
                        this is not intended for production use, but it provides
                        an easy way to experiment and test your database
                        connections.
                    </p>
                    <p className="mb-4">
                        The free tier includes the following resources:
                    </p>
                    <ul className="list-disc pl-6 text-white mb-4">
                        <li>1 MySQL Database</li>
                        <li>25 MB Storage</li>
                        <li>Limited Queries</li>
                        <li>Email Support</li>
                        <li>Remote MySQL Access</li>
                    </ul>
                    <p className="mb-4">To set it up, follow these steps:</p>
                    <ol className="list-decimal pl-6 text-white mb-4">
                        <li>
                            <strong>Register an account:</strong> Visit{" "}
                            <a
                                href="https://freedb.tech/register.html"
                                className="bg-text-gradient bg-clip-text text-transparent"
                            >
                                https://freedb.tech/register.html
                            </a>{" "}
                            and register using your email, or create a dummy
                            account through{" "}
                            <a
                                href="https://temporary-mail-generator.vercel.app"
                                className="bg-text-gradient bg-clip-text text-transparent"
                            >
                                https://temporary-mail-generator.vercel.app
                            </a>
                            .
                        </li>
                        <li>
                            <strong>Verify your email:</strong> After
                            registration, check your email to verify your
                            account.
                        </li>
                        <li>
                            <strong>Create a database and user:</strong> Go to
                            your{" "}
                            <a
                                href="https://freedb.tech/dashboard/"
                                className="bg-text-gradient bg-clip-text text-transparent"
                            >
                                https://freedb.tech/dashboard
                            </a>{" "}
                            to create a new database and user. Then, update{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                .env
                            </code>{" "}
                            file in your Laravel project and update{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                .env
                            </code>{" "}
                            in Vercel your Laravel project settings.
                            <pre className="p-4 rounded-md text-sm overflow-x-auto">
                                {`DB_HOST=sql.freedb.tech
DB_PORT=3306
DB_DATABASE=                // Add your DATABASE NAME here
DB_USERNAME=                // Add your DATABASE USER here
DB_PASSWORD=                // Add your PASSWORD here`}
                            </pre>
                        </li>
                        <li>
                            <strong>Access phpMyAdmin:</strong> Visit{" "}
                            <a
                                href="https://phpmyadmin.freedb.tech/"
                                className="bg-text-gradient bg-clip-text text-transparent"
                            >
                                https://phpmyadmin.freedb.tech
                            </a>
                            , and log in using the server, username, and
                            password you just created in the{" "}
                            <a
                                href="https://freedb.tech/dashboard/"
                                className="bg-text-gradient bg-clip-text text-transparent"
                            >
                                https://freedb.tech/dashboard
                            </a>
                            .
                        </li>
                        <li>
                            <strong>
                                Import your local database (optional):
                            </strong>{" "}
                            If you have an existing SQL database, you can export
                            it from your local phpMyAdmin and import the{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                .sql
                            </code>{" "}
                            file into your remote database on phpMyAdmin at{" "}
                            <a
                                href="https://phpmyadmin.freedb.tech/"
                                className="bg-text-gradient bg-clip-text text-transparent"
                            >
                                https://phpmyadmin.freedb.tech
                            </a>
                            .
                        </li>
                    </ol>
                </section>

                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        DATABASE STATUS
                    </h2>

                    {!dbStatus && !error && (
                        <p className="mb-4">Checking connection...</p>
                    )}

                    {error && (
                        <p className="text-red-500">
                            Error fetching database status: {error}
                        </p>
                    )}

                    {dbStatus && (
                        <>
                            {dbStatus.status &&
                            dbStatus.status.includes("successfully") ? (
                                <>
                                    <p className="text-green-500">
                                        {dbStatus.status}
                                    </p>
                                    <p className="text-blue-500">
                                        <strong>MySQL Version:</strong>{" "}
                                        {dbStatus.version}
                                    </p>
                                    <p className="text-blue-500">
                                        <strong>Host:</strong> {dbStatus.host}
                                    </p>
                                    <p className="text-blue-500 mb-4">
                                        <strong>Database Name:</strong>{" "}
                                        {dbStatus.database}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-red-500">
                                        {dbStatus.status}
                                    </p>
                                    {dbStatus.errorDetails && (
                                        <p className="text-red-500 mb-4">
                                            <strong>Error Details:</strong>{" "}
                                            {dbStatus.errorDetails}
                                        </p>
                                    )}
                                </>
                            )}
                        </>
                    )}

                    <p className="mb-4">
                        The status above could be either "Connected
                        successfully!" or "Connection failed!." As mentioned
                        earlier, this is not suitable for production use, but it
                        is perfect for testing or demo projects.
                    </p>
                    <p className="mb-4">
                        If you need storage, you can use the Cloudinary service
                        for free, or simply convert each uploaded file into
                        base64 (not recommended) in your CRUD Controller logic.
                    </p>
                </section>

                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        HOSTING ON VERCEL
                    </h2>
                    <ol className="list-decimal pl-6 text-white mb-4">
                        <li>
                            Create a repo on GitHub and push this code from your
                            repository.
                        </li>
                        <li>Follow these steps before proceeding to Vercel:</li>
                        <ol className="list-disc pl-6 text-white">
                            <li>
                                Open your terminal and navigate to your project
                                folder.
                            </li>
                            <li>
                                Initialize a new Git repository if you haven't
                                already:
                            </li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git init
                            </code>
                            <li>
                                Run the following command to add all your
                                changes:
                            </li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git add .
                            </code>
                            <li>
                                Commit your changes with a message describing
                                the changes:
                            </li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git commit -m "Your commit message"
                            </code>
                            <li>
                                Create or rename your branch to `main` (if it's
                                not already named `main`):
                            </li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git branch -M main
                            </code>
                            <li>
                                If you haven't connected your local repository
                                to GitHub, you can do so by running:
                            </li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git remote add origin
                                https://github.com/your-username/your-repository.git
                            </code>
                            <li>Push your changes to GitHub:</li>
                            <code className="bg-[#1C232B] px-1 rounded">
                                git push -u origin main
                            </code>
                        </ol>
                        <li>
                            In Vercel, click "Import Project" and connect your
                            repository from GitHub.
                        </li>
                        <li>Click "Deploy" to start the process.</li>
                    </ol>
                </section>

                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 bg-text-gradient bg-clip-text text-transparent">
                        VERCEL BUILD SETTINGS
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            In Vercel, go to <strong>Settings</strong> →{" "}
                            <strong>General</strong>, and under{" "}
                            <strong>Build & Development Settings</strong>, set
                            the <strong>Output Directory</strong> to{" "}
                            <code className="bg-[#1C232B] px-1 rounded">
                                public
                            </code>
                            .
                        </li>
                        <li>
                            Set <strong>Node.js Version</strong> to{" "}
                            <strong>18.x or higher</strong> (but not the latest
                            version) and then redeploy.
                        </li>
                    </ul>
                </section>
            </main>

            <footer className="mt-12 text-center text-gray-600">
                <p>ReiiV. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
