package com.geass.gateway.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geass.gateway.common.BaseResponse;
import com.geass.gateway.repository.ThreeDRepository;

@Service
public class ThreeDService {

    @Autowired
    private ThreeDRepository repository;

    public BaseResponse<Map<String,Object>> getByID(Object body) {
    	return repository.getByID(body); 
    	}
    
    public BaseResponse<Map<String,Object>> searchCN(Object body) {
    	return repository.searchCN(body);
    	}
    
    public BaseResponse<Map<String,Object>> searchJP(Object body) {
    	return repository.searchJP(body); 
    	}
    
    public BaseResponse<Map<String,Object>> sortByFavorite(Object body) {
    	return repository.sortByFavorite(body); 
    	}
    
    public BaseResponse<Map<String,Object>> sortByView(Object body) { 
    	return repository.sortByView(body); 
    	}
    
    public BaseResponse<Map<String,Object>> sortByRelease(Object body) {
    	return repository.sortByRelease(body); 
    	}
    
}
