const initializeSupabase = require('../supabaseConfig'); // Update the path if needed

// Initialize Supabase connection
const supabase = initializeSupabase();

const getWisulData = async (req, res) => {
    try {
        // Replace 'YOUR_TABLE_NAME' with the name of your table
        const publicationID = req.decoded.publication_id
        


        let { data, error } = await supabase
            .from('articles')
            .select(`
    *,
    articlestatus(*),
    authors(*),
    categories(*),
    post_type(*), 
    publication(*),
     control("*")
    `).eq("publication_id", `${publicationID}`).eq("status","3");
        // '*' fetches all columns, you can specify specific columns if needed

        if (error) {
            throw error;
        }

        res.json({ data }); // Send the fetched data as a JSON response
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getWisulData }