# Project Name

> This service renders the photo carousel portion of Airbnb 'homes' page. On photo mouseover the images should gain focus. Upon clicking any photo it will bring up the carousel allowing users to scroll through the gallery. Images can also be favorited and shared to social media.

## Related Projects

  - https://github.com/sdc-team-2/carousel
  - https://github.com/sdc-team-2/reviews


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

###CRUD api

```
- GET: '/homes' - This route should send back the homeinfo for a home by the home ID 
- POST: '/homes' - This route should post new homeinfo 
- PUT: '/homes:id' - This route should update the homeinfo post 
- DELETE: '/homes:id' - This route should delete the lastest post
```
### Installing Dependencies

From within the root directory:

```
npm install
```

#### Running the Service

From within the root directory:
```
Server: npm start
```
```
Webpack: npm run build
```
