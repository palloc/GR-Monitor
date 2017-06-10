# coding: UTF-8
import subprocess


command = subprocess.Popen(['nvidia-smi', '-q'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

output = command.communicate()
output_temp = output[0].decode('UTF-8').split('\n')
output_list = []
output_dict = {}

total_memory = []
free_memory = []

for output_str in output_temp:
    output_list.append(output_str.replace(" ", ""))
    
for i in range(len(output_list)):
    try:
        if output_list[i] == "FBMemoryUsage":
            total_memory.append(output_list[i+1])
            free_memory.append(output_list[i+3])
    except:
        pass
        
print(total_memory)
        
