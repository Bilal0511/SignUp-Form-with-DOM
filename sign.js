var img = document.createElement('img')
img.setAttribute('src','./google.svg')
img.style.margin = '10px 300px 10px 300px'
var lable = document.createElement("label")
var input = document.createElement("input")
var heading = document.createElement("h1")
heading.innerHTML = "Sign Up" 
var enter = document.getElementById('head')
enter.append(img)
enter.append(heading)
var hb = document.createElement('h4')
hb.innerHTML = 'Please fill in this form to create an account.'
enter.append(hb)
var hr = document.createElement('hr')
enter.append(hr)
lable.setAttribute("for","first")
lable.innerHTML= 'First Name : '
lable.style.fontSize = '1.5rem'
enter.append(lable)
input.setAttribute("type","text")
input.setAttribute("placeholder","Enter Your first name")
input.setAttribute("id","first")
lable.setAttribute("for","first")
enter.append(input)
var br = document.createElement('br')
enter.append(br)
var a = document.createElement('label')
a.innerHTML='Last Name : '
a.style.fontSize = '1.5rem'
enter.append(a)
var b =document.createElement('input')
b.setAttribute("type","text")
b.setAttribute("placeholder","Enter Your Last Name")
b.setAttribute("id","last")
a.setAttribute('for','last')
enter.append(b)
var e = document.createElement('br')
enter.append(e)
var c = document.createElement('label')
c.innerHTML = 'Phone no : '
c.style.fontSize = '1.5rem'
var d = document.createElement('input')
d.setAttribute("type","text")
d.setAttribute("placeholder","Enter Your Phone Number")
d.setAttribute("id","num")
c.setAttribute('for','num')
enter.append(c)
enter.append(d)
var h = document.createElement('br')
enter.append(h)
var f= document.createElement('label')
f.innerHTML = 'E-mail : '
f.style.fontSize = '1.5rem'
var g = document.createElement('input')
g.setAttribute("type","email")
g.setAttribute("placeholder","Enter Your E-mail Address")
g.setAttribute("id","mail")
f.setAttribute('for','mail')
enter.append(f)
enter.append(g)
var i = document.createElement('br')
enter.append(i)
var j = document.createElement('label')
j.innerHTML = 'Password : '
j.style.fontSize = '1.5rem'
var k = document.createElement('input')
k.setAttribute("type","password")
k.setAttribute("placeholder","Enter Your Password")
k.setAttribute("id","word")
j.setAttribute('for','word')
enter.append(j)
enter.append(k)
var l = document.createElement('br')
enter.append(l)
var m = document.createElement('label')
m.innerHTML = 'Confirm Password : '
m.style.fontSize = '1.5rem'
var n = document.createElement('input')
n.setAttribute("type","password")
n.setAttribute("placeholder","Confirm Your Password")
n.setAttribute("id","pass")
m.setAttribute('for','pass')
enter.append(m)
enter.append(n)
var heading = document.createElement('h2')
heading.innerHTML = 'Select Gender'
enter.append(heading)
var o = document.createElement('label')
o.innerHTML = 'Male '
o.style.fontSize = '1.5rem'
var p = document.createElement('input')
p.setAttribute('type','radio')
p.setAttribute('name','gender')
p.setAttribute('id','male')
o.setAttribute('for','male')
enter.append(o)
enter.append(p)
var q = document.createElement('label')
q.innerHTML = 'Female '
q.style.fontSize = '1.5rem'
var r = document.createElement('input')
r.setAttribute('type','radio')
r.setAttribute('name','gender')
r.setAttribute('id','female')
q.setAttribute('for','female')
enter.append(q)
enter.append(r)
var s = document.createElement('label')
s.innerHTML = 'Rather not to say '
s.style.fontSize = '1.5rem'
var t = document.createElement('input')
t.setAttribute('type','radio')
t.setAttribute('name','gender')
t.setAttribute('id','rather')
s.setAttribute('for','rather')
enter.append(s)
enter.append(t)
var field = document.createElement('br')
enter.append(field)
var lab = document.createElement('label')
lab.innerHTML = "I'm not a Robot"
lab.style.fontSize = '1.5rem'
var rob = document.createElement('input')
rob.setAttribute('type','checkbox')
rob.setAttribute('id','meg')
lab.setAttribute('for','meg')
enter.append(lab)
enter.append(rob)
var u = document.createElement('br')
enter.append(u)
var btn = document.createElement('input')
btn.setAttribute('type','button')
btn.setAttribute('name','form')
btn.setAttribute('value','Submit')
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
btn.style.border = 'none'
enter.append(btn)