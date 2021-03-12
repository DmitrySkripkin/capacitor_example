import { Capacitor } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
import { FilesystemDirectory } from '@capacitor/core';
import { FilesystemEncoding } from '@capacitor/core';



const html = `
	<!DOCTYPE html>
	<html>
	<head>
		<title>Filesystem file</title>
		<script type="text/javascript" src="/index.js"></script>
	</head>
	<body>
		<h2>This is Filesystem file</h2>
	</body>
	</html>

`;


if (document.title === 'worker') {
	Plugins.Filesystem.writeFile({
		path: "target.html",
		data: html,
		directory: FilesystemDirectory.Documents,
		encoding: FilesystemEncoding.UTF8
	}).then((data) => {
		const url = Capacitor.convertFileSrc(data.uri);
		window.location.replace(url);
	});
}
