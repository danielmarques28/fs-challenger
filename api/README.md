# API - Rails

## How to run (docker)

* Clone the repository

* Enter **api** folder in the repository:

      $ cd fs-challenger/api

* Build the project image:

      $ docker-compose build

* Create and run the container of the builded image:

      $ docker-compose up

* Run the migrations and populate the database (open another terminal tab):

      & docker-compose exec api rails db:migrate db:seed
