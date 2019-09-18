export default {
    computed: {
        filteredBlogsss: function () {
            return this.blogs.filter((blogg) => {
                return blogg.title.match(this.search)
            })
        }
    }
}