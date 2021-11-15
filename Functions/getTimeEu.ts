export const getTimeEu = () => {
        let today = new Date();
        let string
        if(today.getMinutes() < 10) {
            string = '0' + today.getMinutes()
        } else {
            string = today.getMinutes()
        }
        return today.getHours() + ":" + string
}