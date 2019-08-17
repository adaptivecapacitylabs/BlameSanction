walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bblameless postmortem\b/gi, "sanctionless postmortem");
	v = v.replace(/\bblameless post-mortem\b/gi, "sanctionless post-mortem");
	
	v = v.replace(/\bblameless postmortems\b/gi, "sanctionless postmortems");
	v = v.replace(/\bblameless post-mortems\b/gi, "sanctionless post-mortems");

	textNode.nodeValue = v;
}


