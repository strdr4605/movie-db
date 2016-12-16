import $ from 'jquery'

function getRequestPromise(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      success: function( result ) {
        resolve(result)
      }
    })
  })
}

export default getRequestPromise