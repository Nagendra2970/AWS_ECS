module "iam" {
  source       = "./modules/iam"
  cluster_name = var.cluster_name
}

module "eks_cluster" {
  source                       = "./modules/cluster"
  cluster_name                 = var.cluster_name
  cluster_role_arn             = module.iam.cluster_role_arn
  fargate_pod_execution_role_arn = module.iam.fargate_pod_execution_role_arn
}

output "cluster_name" {
  value = module.eks_cluster.cluster_name
}

output "cluster_endpoint" {
  value = module.eks_cluster.cluster_endpoint
}

output "cluster_arn" {
  value = module.eks_cluster.cluster_arn
}
