# coding: UTF-8
import subprocess


class GPUInfo:
    def __init__(self):
        self.output_list = []

    def get_gpu_info(self):
        command = subprocess.Popen(['nvidia-smi', '-q'],
                                   stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE)
        # reshape return data
        output = command.communicate()
        output_temp = output[0].decode('UTF-8').split('\n')
        for output_str in output_temp:
            self.output_list.append(output_str.replace(" ", ""))

        gpu_name = []
        total_memory = []
        free_memory = []
        gpu_util = []

        for i in range(len(self.output_list)):
            if "ProductName" in self.output_list[i]:
                name_start = self.output_list[i].find(":") + 1
                gpu_name.append(self.output_list[i][name_start:])

            elif "FBMemoryUsage" in self.output_list[i]:
                total_start = self.output_list[i+1].find(":") + 1
                total_end = self.output_list[i+1].find("MiB")
                free_start = self.output_list[i+3].find(":") + 1
                free_end = self.output_list[i+3].find("MiB")
                total_memory.append(self.output_list[i+1][total_start:total_end])
                free_memory.append(self.output_list[i+3][free_start:free_end])

            elif "Utilization" in self.output_list[i]:
                util_start = self.output_list[i+1].find(":") + 1
                util_end = self.output_list[i+1].find("%")
                gpu_util.append(self.output_list[i+1][util_start:util_end])

        gpu_info = []

        # create json shape
        for i in range(len(gpu_name)):
            gpu = {}
            gpu.update({"number": i})
            gpu.update({"name": gpu_name[i]})
            gpu.update({"total_memory": int(total_memory[i])})
            gpu.update({"free_memory": int(free_memory[i])})
            gpu.update({"utilization_rate": int(gpu_util[i])})
            gpu_info.append(gpu)

        return gpu_info
