package net.rishabh.ems.service.impl;

import lombok.AllArgsConstructor;
import net.rishabh.ems.dto.DepartmentDto;
import net.rishabh.ems.entity.Department;
import net.rishabh.ems.exception.ResourceNotFoundException;
import net.rishabh.ems.mapper.DepartmentMapper;
import net.rishabh.ems.mapper.EmployeeMapper;
import net.rishabh.ems.repository.DepartmentRepository;
import net.rishabh.ems.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@AllArgsConstructor
@Service
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.maptoDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.maptoDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department Does not Exists"));

        return DepartmentMapper.maptoDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map((department -> DepartmentMapper.maptoDepartmentDto(department)))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department does not exists"));
        department.setDepartmentName(updatedDepartment.getDepartmentName());
        department.setDepartmentDescription(updatedDepartment.getDepartmentDescription());

        return DepartmentMapper.maptoDepartmentDto(department);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                        .orElseThrow(() -> new ResourceNotFoundException("Department does not exists"));
        departmentRepository.delete(department);
    }
}
