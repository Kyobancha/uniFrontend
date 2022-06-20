function PrivateHome(props) {
    return (
        // Content depending on whether the user is logged in or not
        <div id="PrivatePage">
            <h1 className="text-5xl font-bold text-center">These are your own forums</h1>
            <section className="mr-auto ml-auto w-150 block mt-10">
                <h2 className="mr-auto ml-auto mt-10 text-3xl font-bold">Latest News</h2>
                <p>7.6.2020 - Forum 1</p>
                <p>7.6.2020 - Forum 2</p>
                <p>7.6.2020 - Forum 3</p>
                <p>7.6.2020 - Forum 4</p>
            </section>
        </div>
    );
}

export default PrivateHome;
