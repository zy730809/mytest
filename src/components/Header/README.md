-------路由传递参数知识点回顾
        第一种：字符串形式(querry参数+params参数)
        this.$router.push('/search/'+this.keyword+"?k="+this.keyword.toUpperCase())

        第二种：模板字符串(querry参数+params参数)
        this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)

        第三种：对象式写法(需要为路由命名，querry参数+params参数)-----实际项目中比较常用的方法
        在传递两个参数()=>{},()=>{}即可解决编程式导航