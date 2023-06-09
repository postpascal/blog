---
id: kmeans
slug: /kmeans
title: K-Means聚类
date: 2018-09-15
authors: tianfang
tags: [聚类,机器学习,无监督学习]
keywords: [聚类,机器学习,无监督学习]
---

`K-Means 聚类 矩阵形式`

``` python

class KMeans:
	"""cash tracker a K-MEANS clustering approach  Version 0"""
	def __init__(self, x, n_classes):
		"""centroid initialization
		centroid: [n_classes * features]
		X: [n_points * features]
		clusters: [n_classes * n_points]
		result: [n_classes * n_points]
		"""
		ind = random.sample(range(x.shape[0]), n_classes)
		self.centroids = x[ind]
		self.X = x.T
		self.n_classes = n_classes
		self.clusters = None
		self.result = None
		self.b2 = np.sum(np.multiply(self.X, self.X), 0).reshape(1, -1)

	def update_centroids(self):
		"""update centroids
		In this approach, a single point may belong to two different clusters at the same time
		only if the point's distance score stay the same in the two clusters
		"""

		mask = 1 + np.sign(self.clusters.min(0)-self.clusters)
		divisor = np.sum(mask, axis=1).reshape(self.n_classes, 1) + 1
		self.centroids = np.divide(np.dot(mask, self.X.T), divisor)
		self.result = mask

	def update_distance(self):
		"""update clusters Euclidean distance= sqrt((a-b)^2)= sqrt(a^2-2ab+b^2)
		In this case, A matrix form  is using to accelerate computation
		"""
		a2 = np.sum(np.multiply(self.centroids, self.centroids),1).reshape(-1,1)
		self.clusters = np.sqrt(a2-2*np.dot(self.centroids, self.X) + self.b2)


	@staticmethod
	def silhouette_coef(x, results):
		"""
		:param x: np.array[n_points * features]
		:param results: np.array[n_classes * points]
		:return: int
		"""

		n_classes = results.shape[0]
		points_map = KMeans.euclidean_metric(x)
		cluster_map = np.dot(results, points_map)
		n_inner_points = np.sum(results, axis=1).reshape(n_classes, 1) + 1
		avg_cluster_map = np.divide(cluster_map, n_inner_points)
		inner_dist = np.sum(np.multiply(results, avg_cluster_map), 0)
		exter_dist = np.multiply(1 - results, avg_cluster_map)
		exter_dist[exter_dist == 0] = np.nan
		b=np.nanmin(exter_dist, axis=0)
		sil = np.divide(b-inner_dist,np.fmax(inner_dist,b))
		return np.mean(sil)

	@staticmethod
	def euclidean_metric(a, b=None):
		"""
		Euclidean Metric = sqrt((a-b)^2)= sqrt(a^2-2ab+b^2)
		A matrix form  is using to accelerate computation

		:param a: np.array[n_points * features]
		:param b: np.array[features * m_points]
		:return: np.array[n_points * m_points]
		"""
		if not b:
			b = a.T
		v = np.sum(np.multiply(a, a), 1).reshape(-1, 1) - 2 * np.dot(a, b) + np.sum(np.multiply(b, b), 0).reshape(1, -1)
		return v

	@staticmethod
	def external_validity_index(predict, target):
		"""
		External Validity Index
		:param predict: outputs
		:param target: targets
		:return: float
		"""
		ss, sd, ds, dd = [], [], [], []
		for i in range(len(predict)):
			for j in range(i+1, len(predict)):
				if predict[i] == predict[j]:
					if target[i] == target[j]:
						ss.append((i, j))
					else:
						sd.append((i, j))
				else:
					if target[i] == target[j]:
						ds.append((i, j))
					else:
						dd.append((i, j))
		return len(ss)/len(ss+sd+ds)
```