# EKS Fargate Terraform

This directory contains Terraform configuration for a basic Amazon EKS cluster
that runs workloads on Fargate. It uses the default VPC and automatically
selects only those subnets in availability zones supported by EKS. By default
the configuration excludes the `us-east-1e` zone, which is not available for EKS
control plane instances.

## Usage

```
terraform init
terraform apply
```

Customize the variables in `variables.tf` if you need to change the cluster name
or AWS region. You can also adjust the `excluded_azs` variable if additional
availability zones should be omitted.
