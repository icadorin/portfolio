import { dedent } from '@/utils/dedent';

export const testCodes = {
  extendWith: dedent(`
    @ExtendWith(MockitoExtension.class)
    public class AuthServiceTest {
        //...
        
        @Mock
        private AuthenticationManager authenticationManager;

        @InjectMocks
        private AuthService authService;
        
        //...
    }
  `),

  whenThenReturn: dedent(`
    when(userRepository.findByEmail("new@test.com")).thenReturn(Optional.empty());
    when(passwordEncoder.encode("password123")).thenReturn("encoded-password");
    when(jwtService.generateToken(any(User.class))).thenReturn("access-token");
  `),

  whenThenThrow: dedent(`
    when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
        .thenThrow(new BadCredentialsException("Credenciais inválidas"));
  `),

  verify: dedent(`
    verify(mock).metodo();                    // Chamado 1 vez
    verify(mock, times(n)).metodo();          // Chamado n vezes
    verify(mock, never()).metodo();           // Nunca chamado

    // Exemplo no código
    verify(userRepository).findByEmail("new@test.com");
    verify(userRepository, never()).save(any(User.class));
  `),

  argumentAny: dedent(`
    any(User.class) // Qualquer objeto User
    any()           // Qualquer objeto de qualquer tipo
    anyString()     // Qualquer string
  `),

  argumentArgThat: dedent(`
    verify(refreshTokenRepository).save(argThat(token ->
        token.getUser().equals(activeUser) &&             // Token deve pertencer ao usuário ativo
        !token.isRevoked() &&                             // Não deve estar revogado
        token.getExpiresAt().isAfter(LocalDateTime.now()) // Data de expiração no futuro
    ));
  `),
} as const;
