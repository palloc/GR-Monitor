# coding: UTF-8
import subprocess




command = subprocess.Popen(['nvidia-smi', '-q'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

output = command.communicate()
output_temp = output[0].decode('UTF-8').split('\n')
output_list = []

gpu_name = []
total_memory = []
free_memory = []
gpu_util = []

for output_str in output_temp:
    output_list.append(output_str.replace(" ", ""))
    
for i in range(len(output_list)):
    if "ProductName" in output_list[i]:
        gpu_name.append(output_list[i][output_list[i].find(":")+1:])
            
    elif "FBMemoryUsage" in output_list[i]:
        total_memory.append(output_list[i+1][output_list[i+1].find(":")+1:])
        free_memory.append(output_list[i+3][output_list[i+3].find(":")+1:])

    elif "Utilization" in output_list[i]:
        gpu_util.append(output_list[i+1][output_list[i+1].find(":")+1:])
        

# for debug        
for i in range(len(gpu_name)):
    print("{0}. {1}".format(i, gpu_name[i]))
    print("total_memory : {}".format(total_memory[i]))
    print("free_memory : {}".format(free_memory[i]))
    print("gpu_utilization : {}".format(gpu_util[i]))
    
