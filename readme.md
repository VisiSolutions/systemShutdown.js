<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/VisiSolutions/systemShutdown.js">
    <img src="https://visimedia.co.uk/images/Logo-Horizontal-Transparent-p-500.png" alt="Logo" height="80">
  </a>

<h3 align="center">systemShutdown.js</h3>

  <p align="center">
    Cross-platform support to shutdown a computer from Node.js
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

> Run program using `sudo` or admin permission on Windows

Provides simple cross-platform support to shutdown a computer from Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/VisiSolutions/systemShutdown.js.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

```js
let Shutdown = reuquire("shutdown_computer");
let s = new Shutdown();
async function shutdown() {
  try {
    await s.initShutdown();
  } catch (err) {
    console.error(err);
  }
}

// OR Scheduale the Shutdown
s.schedualeShutdown({ sec: 10, min: 0, hour: 0 });
// You may pass in any combination of the time unit

// For Example
s.schedualeShutdown({ sec: 10, min: 1 });
// OR
s.schedualeShutdown({ hour: 1 });
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/VisiSolutions/systemShutdown.js/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Copyright (C) 2023 VisiMedia Ltd

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ben Lewis - ben.lewis@visimedia.co.uk

Project Link: [https://github.com/VisiSolutions/systemShutdown.js](https://github.com/VisiSolutions/systemShutdown.js)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=green
[Node-url]: https://nodejs.org/
[contributors-shield]: https://img.shields.io/github/contributors/VisiSolutions/systemShutdown.js.svg?style=for-the-badge
[contributors-url]: https://github.com/VisiSolutions/systemShutdown.js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/VisiSolutions/systemShutdown.js.svg?style=for-the-badge
[forks-url]: https://github.com/VisiSolutions/systemShutdown.js/network/members
[stars-shield]: https://img.shields.io/github/stars/VisiSolutions/systemShutdown.js.svg?style=for-the-badge
[stars-url]: https://github.com/VisiSolutions/systemShutdown.js/stargazers
[issues-shield]: https://img.shields.io/github/issues/VisiSolutions/systemShutdown.js.svg?style=for-the-badge
[issues-url]: https://github.com/VisiSolutions/systemShutdown.js/issues
[license-shield]: https://img.shields.io/github/license/VisiSolutions/systemShutdown.js.svg?style=for-the-badge
[license-url]: https://github.com/VisiSolutions/systemShutdown.js/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username