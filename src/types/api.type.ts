export interface PodData {
  host_ip: string;
  image: string;
  image_id: string;
  ip: string;
  kind: string;
  name: string;
  namespace: string;
  status: string;
}

export interface LogData {
  level: string;
  message: string;
  namespace: string;
  pod: string;
  timestamp: string;
}
