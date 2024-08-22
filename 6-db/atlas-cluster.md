# Setting Up MongoDB Atlas Cluster

MongoDB Atlas is a fully managed cloud database service that makes it easy to set up, operate, and scale MongoDB deployments. Follow the steps below to create a MongoDB Atlas cluster:

## Step 1: Sign Up or Log In

If you don't have an account, sign up for MongoDB Atlas. If you already have an account, log in to your MongoDB Atlas account.
[MongoDB Atlas](https://cloud.mongodb.com/)

## Step 2: Create a New Cluster

After logging in, click on the Build a Cluster button.
Choose the free plan. You can also edit your provider and region
Name your cluster "replit"
Click the Create Cluster button to initiate the cluster creation process.

## Step 3: Configure Cluster Settings

Set up authentication by creating a MongoDB user with a username and password. MongoDB can autogenerate a secure password for you, make sure you copy the password for later use

In Connection Security section, MongoDB should have a listing of "My IP Address". Ensure that this is listed. If it is not listed, you can google your IP address and add it with a descriptive name.

If you are using a VPN, you may have to add the IP address 0.0.0.0/0 , however, it is crucial to note that this setting grants access to any IP address, and as a best practice, this configuration should not be employed in production-level applications due to security considerations.

## Step 4: Connect to Your Cluster

After configuring the cluster settings, click on the Connect button again.
Choose the Connect Your Application option.
Copy the connection string provided. This string contains the necessary information to connect your application to the MongoDB Atlas cluster.

## Step 5: Connect Your Application

In Compass, we will use the same connection string to view our database. In New Connection, paste your connection string and click `Save & Connect` to get started with the lab!

### Example connection string `

`mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>`

(replace `<username>`, `<password>`, and `<clustername>` with your actual credentials)
