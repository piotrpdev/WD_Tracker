$(document).ready(function() {

const blog =
{
	'title': 'Electroniq Blog',
	'date': 'January 2022',
	'description': "Electroniq is astrophysicist (and retro music enthusiast).",
	'content':
	   '<h2>Welcome to Electroniq</h2><p><em>Electroniq</em> is a new blog about space, distant galaxies and black holes.</p><p>We&#39;ll talk about <a href="https://en.wikipedia.org/wiki/Holographic_principle" target="_blank">the holographic principle</a>, dark matter and the beauty of space in infrared light.</p>',
	'comments':[
	            {'user':'Jane',
	             'date':'Thu Feb 7 2022 15:07:50 GMT+0000 (Greenwich Mean Time)',
	             'comment':'Lovely article.'
	            },
	            {'user':'Pat',
	             'date':'Sat Feb 16 2022 15:07:50 GMT+0000 (Greenwich Mean Time)',
	             'comment':'Great piece of work.'
	            }
	           ]
}

Handlebars.registerHelper('formatDate', (commentdate) => {
  let dateToFormat = new Date(commentdate)
  let daynum = dateToFormat.getDate()
  let month = dateToFormat.getMonth()
  let thisYear = dateToFormat.getFullYear()

  let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  let monthname=months[month];
  return `${daynum} ${monthname}, ${thisYear}`
})

let template = Handlebars.compile($('#blog').html())

let output = template(blog)

$("#content-placeholder").html(output)


});