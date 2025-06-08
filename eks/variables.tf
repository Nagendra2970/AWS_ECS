variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "cluster_name" {
  description = "EKS cluster name"
  type        = string
  default     = "demo-fargate"
}


variable "excluded_azs" {
  description = "List of availability zones that should not be used for control plane subnets"
  type        = list(string)
  default     = ["us-east-1e"]
}

