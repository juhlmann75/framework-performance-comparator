# Comperf Load Testing Automation

Golang script that automates running the K6 load test against multiple frameworks

## Prerequisites

- Go
- K6 Installation
- Framework web service running

## Configuration

`config.yaml` holds all the configuration values that the script runs against
- `framework-endpoints` - Key/Value pair where the key is the framework name/label, and the value is the endpoint that the K6 load test hits
- `duration` - how long the K6 load test runs per framework-endpoint entry
- `vus` - Number of virtual users requesting the endpoint

## Running the script

To run the script, make sure you are in the `cli` directory

```bash
cd cli
```

Then run the Go script

```bash
go run .
```

## Future improvements

- Converting the script to a CLI
- Adding more configuration options, such as location of the load test output