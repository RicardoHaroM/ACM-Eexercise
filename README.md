
# ACME Exercise

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.


## Solution Overview
The program read sets of data from a txt file in which each set is separated by a enter to the other sets of data.

These sets of data are converted in objects that represents the employee and the schedule.

Then, these objects are stored according to the day ordered by the start time and compare with the others schedule to know if they are in the same time frame. If the schedule are in the same time frame we stored the concurrece.

Finally, when we compare all the schedules, we stored all the concurrece in an array to print when we finish to compare the others sets of data.
## Architecture
Node js v16.15.1. to solve the problem.
Jest for unit test.
## Run Locally

Clone the project

```bash
  git clone https://github.com/RicardoHaroM/ACM-Eexercise.git
```

Go to the project directory

```bash
  cd my-project
```

Run the program

```bash
  npm run start
```


## Running Tests

First, we need to install the dependencies

```bash
  npm install
```

To run tests, run the following command

```bash
  npm run test
```

