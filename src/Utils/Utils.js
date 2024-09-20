export const getUserId = () =>{
    
    // check if authentication token is in localStorage
    // ................some logic ................

    
    

}

export function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

export function getPath(){
  let pathName = document.location.pathname 
  let idx= pathName.lastIndexOf('/');

  let newString = pathName.substring(idx+1);
  return newString; 
}
export function getBoard(appBoards, Id){
    // console.log(appBoards)
    for(let i = 0; i < appBoards.length; i++){
        if(appBoards[i].id === Id){
            return appBoards[i];
        }
    }
    return {};
}
export function getStatusOptions(board){
    // console.log(board)
    // let statusBars= board.statusBar.split(",");
    // console.log(statusBars)
    // let statusOptions = statusBars.map((status,idx)=> status);

    
    // return statusOptions;
}