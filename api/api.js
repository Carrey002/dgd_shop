export default function(obj){
 return new Promise((resolve, reject) => {
  uni.request({
   ...obj,
   success(data) {
    resolve(data);
   },
   fail(error) {
    reject(error);
   }
  })
 })
}