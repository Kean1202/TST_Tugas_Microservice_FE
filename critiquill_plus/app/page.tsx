const page = () => {
  return (
    <div className={"flex flex-col max-w-full items-center mx-auto"}>
      <section className="w-full flex-start flex-col mx-16">
      <div>
          <h1 className="headline_text text-center purple_gradient pb-4">
              Welcome to CritiQuill Plus!
              <br/>
          </h1>

          <h1 className="headline_text2 text-center orange_gradient pb-4">
              How to use CritiQuill Plus
              <br/>
          </h1>

          <div className="flex mt-4 w-full justify-center align-center items-center text-left">
          <p className="font-inter text-xl font-semibold">
            1. Sign in using your Google Account by pressing Sign In <br/>
            <br/>
            2. The Navbar should now change, click on the "Start Debating" button to access the CritiQuill Plus services <br/>
            <br/>
            3. Register and log in once again in the "Authorization" tab of the Swagger UI page (optional) <br/>
            <br/>
            4. To use an account with full access to CritiQuill services, use the username "kean1202" and the password "KNS1202nafis" <br/>
            <br/>
            5. Follow the CritiQuill Plus document to understand the function of each endpoint and how to start generating speech feedback<br/>
          </p>
          </div>
      </div>
      </section>
    </div>
  )
}

export default page