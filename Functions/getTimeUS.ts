export const getTimeUs = () => {
    let date = new Date()
    let hours = date.getHours();
    let minutes:any = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    return hours + ':' + minutes + ' ';
    }