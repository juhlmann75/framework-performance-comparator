package main

import (
	"bufio"
	"fmt"
	"gopkg.in/yaml.v2"
	"log"
	"os"
	"os/exec"
	"strconv"
)

type conf struct {
	Endpoints []string `yaml:"endpoints"`
	Duration  string   `yaml:"duration"`
	Vus       int64    `yaml:"vus"`
}

func (c *conf) getConf() *conf {
	yamlFile, err := os.ReadFile("config.yaml")
	if err != nil {
		log.Printf("yamlFile.Get er #%v ", err)
	}
	err = yaml.Unmarshal(yamlFile, c)
	if err != nil {
		log.Fatalf("Unmarshal: #%v", err)
	}

	return c
}

func main() {
	var c conf
	c.getConf()

	fmt.Println(c)
	cmd := exec.Command("k6", "run",
		"-e", "VUS="+strconv.FormatInt(c.Vus, 10),
		"-e", "DURATION="+c.Duration,
		"--out", "csv=../k6/output/test_results.csv",
		"../k6/dist/get-200-status-test.js")
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		log.Fatal(err)
	}
	startErr := cmd.Start()
	if startErr != nil {
		log.Fatal(startErr)
	}
	// print the output of the subprocess
	scanner := bufio.NewScanner(stdout)
	for scanner.Scan() {
		m := scanner.Text()
		fmt.Println(m)
	}
	cmd.Wait()
}
