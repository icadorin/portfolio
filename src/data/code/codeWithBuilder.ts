export const codeWithBuilder = {
  title: 'Com o uso do Builder',
  code: `
private User createUser(RegisterRequest request) {
    return userRepository.save(
        User.builder()
            .email(request.getEmail())
            .passwordHash(passwordEncoder.encode(request.getPassword()))
            .fullName(request.getFullName())
            // NÃO precisa setar role/status - usa valores default
            .build()
    );
}`.trim(),
};
