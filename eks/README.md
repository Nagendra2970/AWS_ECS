# EKS Fargate Terraform

This directory contains Terraform configuration for a basic Amazon EKS cluster
that runs workloads on Fargate. The code uses the default VPC and subnets in the
configured AWS account.

## Usage

```
terraform init
terraform apply
```

Customize the variables in `variables.tf` if you need to change the cluster name
or AWS region.
