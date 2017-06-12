# coding: UTF-8
import subprocess


class GPUInfo:
    def __init__(self):
        self.output_list = []

    def get_gpu_info(self):
        command = subprocess.Popen(['nvidia-smi', '-q'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        # reshape return data
        output = command.communicate()
        output_temp = output[0].decode('UTF-8').split('\n')
        for output_str in output_temp:
            self.output_list.append(output_str.replace(" ", ""))

        gpu_num = []
        gpu_name = []
        total_memory = []
        free_memory = []
        gpu_util = []
    
        for i in range(len(output_list)):
            if "ProductName" in output_list[i]:
                gpu_num.append(i)
                gpu_name.append(output_list[i][output_list[i].find(":")+1:])
            
            elif "FBMemoryUsage" in output_list[i]:
                total_memory.append(output_list[i+1][output_list[i+1].find(":")+1:])
                free_memory.append(output_list[i+3][output_list[i+3].find(":")+1:])

            elif "Utilization" in output_list[i]:
                gpu_util.append(output_list[i+1][output_list[i+1].find(":")+1:])

        gpu_info = []
        gpu = {}
        # create json shape
        for i in range(len(gpu_name)):
            gpu.update({"number": self.gpu_num[i]})
            gpu.update({"name": self.gpu_name[i]})
            gpu.update({"total_memory": self.total_memory[i]})
            gpu.update({"free_memory": self.free_memory[i]})
            gpu.update({"utilization_rate": self.gpu_util[i]})            
            gpu_info.append(gpu)

        return {"gpu": gpu_info}

        
