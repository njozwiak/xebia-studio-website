window.EQUIPE=[{name:"Philippe Antoine",role:"Consultant"},{name:"François Laurain",role:"Wait for it!"},{name:"Julien Renault",role:"Commercial"},{name:"Nicolas Thénoz",role:"Poxying the product owner"},{name:"Thibaud Cavin",role:"Top over Top"},{name:"Mathieu Bigorne",role:"Consultant"},{name:"Christophe Pelé",role:"Software Craftsman"},{name:"Mathieu Breton",role:"Are you so big?"},{name:"Florent LeGall",role:"JS or not JS?"},{name:"Benjamin Lacroix",role:"Front craftsman, Android dummy"},{name:"Bastien Caudan",role:"Software Craftsman"},{name:"Laurène Vol",role:"Coasching for ever"},{name:"Gauthier Mechling",role:"Software Craftsman"},{name:"Nicolas Jozwiak",role:"Technical dbt hinter"},{name:"Simone Civetta",role:"Mobile hooligan iOS craftsman"},{name:"Alexis Kinsella",role:"Consultant"},{name:"Yannick Grezinger",role:"Consultant"},{name:"Thomas Guérin",role:"Consultant"},{name:"Mounir Boudraa",role:"Consultant"},{name:"Julien Smadja",role:"don't play with REST"}],function(e,n){var a=function(e){var n=e.replace(/\s/g,"-").replace(/[éèê]/g,"e").replace(/[ç]/g,"c").toLocaleLowerCase();return"images/equipe/"+n+".jpg"};$(function(){var o=e.equipier,r=n.map(function(e){return o({name:e.name,role:e.role,urlPhoto:a(e.name)})}).join("");$("#equipiers").append(r)})}(window.TEMPLATES,window.EQUIPE);