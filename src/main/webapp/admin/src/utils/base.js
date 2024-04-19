const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmlu7no/",
            name: "ssmlu7no",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmlu7no/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "云课堂视频学习网站管理"
        } 
    }
}
export default base
